"use client"

import React from "react"
import CodeOutput from "../components/CodeOutput"
import ConfigOption from "../components/ConfigOption"

export default function Page() {
  return (
    <div>
      test test test

      <ConfigOption text="Config option goes here" />

      <CodeOutput text="Code output goes here" />
    </div>
  )
}