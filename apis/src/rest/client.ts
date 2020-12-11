import fetch from "node-fetch"
import benchmark from "../benchmark"

async function rest_cb(): Promise<void> {
  const response = await fetch("http://localhost:3001")
}

benchmark("REST", 10, rest_cb)
