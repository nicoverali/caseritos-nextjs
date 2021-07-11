import clsx from "clsx";
import Button from "components/Button";
import Counter from "components/Counter";
import MessageBox from "components/MessageBox";
import Message from "components/MessageBox/Message";
import { ClientSessionContext } from "context/ClientSessionProvider";
import { useRouter } from "next/dist/client/router";
import React, { useContext, useState } from "react";
import NumberFormat from "react-number-format";
import { OutOfStockError } from "services/apiErrors";
import OrderService from "services/OrderService";
import { Product } from "services/ProductService";

interface ProductDescriptionProps {
  product: Product;
  className?: string;
}

function ProductDescription({ product, className }: ProductDescriptionProps) {
  const { token } = useContext(ClientSessionContext);
  const [outOfStock, setOutOfStock] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [orderComplete, setOrderComplete] = useState(false);
  const router = useRouter();

  const handleBuy = async () => {
    if (!token) {
      router.push(`/login?redirectUrl=/products/${product.id}`, "/login");
      return;
    }

    try {
      await OrderService.place(product.id, quantity, token);
      setOrderComplete(true);
      setTimeout(() => {
        router.push("/orders");
      }, 1000);
    } catch (err) {
      if (err instanceof OutOfStockError) {
        setOutOfStock(true);
      }
    }
  };

  return (
    <div className={clsx("flex flex-col max-w-xl", className)}>
      <div className={clsx("flex flex-col w-full p-6 border-2 border-black")}>
        <p>{product.description}</p>
        <NumberFormat
          className="py-6 font-medium text-4xl"
          value={product.price}
          prefix="$"
          thousandSeparator="."
          decimalSeparator=","
          displayType="text"
        />
        <div className="flex items-end">
          <Button style="primary" className="mr-6" onClick={handleBuy}>
            Comprar
          </Button>
          <div>
            <p className="text-center opacity-80 text-sm">
              stock: {product.stock}
            </p>
            <Counter
              className="w-48"
              input={{
                label: "quantity",
                name: "quantity",
                min: 1,
                max: product.stock,
                onChange: setQuantity,
                error: outOfStock ? "No hay suficiente stock" : "",
              }}
            />
          </div>
        </div>
      </div>
      <MessageBox style="success" className="mt-4">
        <Message show={orderComplete}>¡ Orden completada !</Message>
      </MessageBox>
    </div>
  );
}

export default ProductDescription;
