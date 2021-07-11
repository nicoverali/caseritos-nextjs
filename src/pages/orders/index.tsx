import AppContainer from "components/AppContainer";
import OrderCard from "components/OrderCard";
import { ClientSessionContext } from "context/ClientSessionProvider";
import { useRouter } from "next/dist/client/router";
import React, { useContext, useEffect, useState } from "react";
import BigTitle from "sections/BigTitle";
import DefaultHeader from "sections/DefaultHeader";
import Footer from "sections/Footer";
import OrderService, { Order } from "services/OrderService";
import { MoonLoader } from "react-spinners";

function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const { token } = useContext(ClientSessionContext);
  const router = useRouter();

  useEffect(() => {
    if (token) {
      OrderService.getAll(token).then(setOrders);
    } else {
      router.push(`/login?redirectUrl=${router.asPath}`, "/login");
    }
  }, [token, router]);

  if (!orders.length) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <MoonLoader size="40px" />
      </div>
    );
  }

  return (
    <>
      <DefaultHeader />
      <AppContainer>
        <BigTitle>Todas mis ordenes</BigTitle>
        <ul className="mt-16 flex flex-col">
          {orders.map((o) => (
            <li key={o.id} className="w-full mb-6 last:mb-0">
              <OrderCard className="w-full" order={o} />
            </li>
          ))}
        </ul>
        <Footer className="mt-20" />
      </AppContainer>
    </>
  );
}

export default OrdersPage;
