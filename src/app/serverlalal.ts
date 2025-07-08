import * as queries from "@/graphql/queries";
import { amplifyApi } from "@/lib/amplifyServerUtils";

export async function fetchDrills() {
  const result = await amplifyApi.graphql({
    query: queries.listDrills,
    variables: {},
  });
  console.log(result.data.listDrills);

  return result;
}
