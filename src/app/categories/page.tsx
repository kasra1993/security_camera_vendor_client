import { dehydrate } from "@tanstack/react-query";
import { Categories } from "../../../components/categories.client";
import { ReactQueryHydrate } from "../../../components/ReactQueryHydrate";
import getQueryClient from "@/lib/getQueryClient";

export default async function Page() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(
    ["posts"],
    async () =>
      await fetch("http://localhost:8080/categories").then((res) => res.json())
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <ReactQueryHydrate state={dehydratedState}>
      <Categories />
    </ReactQueryHydrate>
  );
}
