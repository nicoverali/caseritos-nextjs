import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { Order } from "services/OrderService";

interface OrderCardProps {
  order: Order;
  className?: string;
}

function OrderCard({ order, className }: OrderCardProps) {
  return (
    <div className={clsx("flex", className)}>
      <div className="relative h-32 w-36 bg-gray-50">
        <Image
          src={order.product.thumbnailUrl}
          alt="order"
          layout="fill"
          objectFit="cover"
          className="absolute inset object-cover h-full w-full"
        />
      </div>
      <div className="flex flex-col ml-6">
        <p>{order.product.owner.storeName}</p>
        <p className="font-medium text-2xl">{order.product.name}</p>
        <p className="text-sm mt-auto opacity-80">
          Fecha: {order.createdAt.toDateString()}
        </p>
      </div>
      <div className="flex flex-col justify-center ml-auto px-8 text-center">
        <p className="text-2xl">${order.price * order.quantity}</p>
        <p>
          {order.quantity} x ${order.price}
        </p>
      </div>
    </div>
  );
}

export default OrderCard;
