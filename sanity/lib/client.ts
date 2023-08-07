import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skayiiEzlP7HVrtLlyum8HZOqYU5ujNSx1WcEk2LSUEFY4PENOskqjdeVJtrvf0t1FoBpJREFTrf1Z2Etpjo7tj7k1IAIdiR4pIKkxIZGinviIvQ59sUxcGOZOKg3uXkDgqirTYgXRBRXt5bO9WOdt8VqhGUwUIzjeOScy4ZZi2IR2NJfjNH"
})
