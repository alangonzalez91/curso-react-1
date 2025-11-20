import { useQuery } from "@tanstack/react-query";
import { APIS_BASE_URL } from "../constantes/base_api_url.js";

export function useObtenerDatosAgenda(pagina) {
  const query = useQuery({
    queryKey: ["pagina", pagina],   // ← IMPORTANTE
    queryFn: async () => {
      const res = await fetch(APIS_BASE_URL + pagina);
      if (!res.ok) throw new Error("Error en la API");
      return res.json();
    },
  });

  return query; // devolvés { data, isLoading, error, ... }
}