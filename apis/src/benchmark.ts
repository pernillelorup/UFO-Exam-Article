import * as fs from "fs"
const now = require("nano-time")

async function benchmark(name: string, iterations: number, target: () => Promise<void>, filepath: string = "observations.csv"): Promise<void> {
  const times: number[] = []

  console.log(`benchmark initiated with ${iterations} iterations`)
  for (let i = 0; i < iterations; i++) {
    const entryTime: number = now() // nano seconds

    await target() // runs the desired function

    const exitTime: number = now() // nano seconds
    times.push(exitTime - entryTime) // appends the elapsed time
  }

  const timeString: string = times.join(",") // converts to comma separated string
  const file = await fs.readFileSync(filepath, "utf8") // reads current file content as string

  // writes to specified file
  if (!file) await fs.writeFileSync(filepath, `${name},${timeString}`)
  else await fs.writeFileSync(filepath, `${file}\n${name},${timeString}`)
  console.log("benchmark completed")
}

export default benchmark
