"use client"

import React from "react"
import CodeOutput from "../components/CodeOutput"
import ConfigOption from "../components/ConfigOption"
import TestCase from "../components/TestCase"

export default function Page() {
  return (
    <div>
      <h1>Heading</h1>

      <details>
        <summary>View test data</summary>
        <pre>{`
          [
            {
              name: 'test'
            }
          ]
        `}</pre>
      </details>

      <div className="grid">
        <section className="configOptions">
          <ConfigOption text="Config option goes here" />
          <ConfigOption text="Config option goes here" />
          <ConfigOption text="Config option goes here" />
        </section>
        <section className="configOptions">
          <TestCase text="Test case goes here" />
          <TestCase text="Test case goes here" />
          <TestCase text="Test case goes here" />
        </section>
      </div>

      <CodeOutput text="Code output goes here" />
    </div>
  )
}