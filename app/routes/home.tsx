import type { Route } from "./+types/home";
import { SkipSelect } from "../../components/SkipSelect";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function meta({}: Route.MetaArgs) {
  return [{ title: "Skip Select" }, { name: "description", content: "" }];
}

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className=""></div>
      <SkipSelect />
    </QueryClientProvider>
  );
}
