# Getting Started with AgentFleet

This checkout contains TypeScript fleet logic and React components. It is not a standalone control-plane deployment.

## Browse the source

| Path | What is checked in |
| --- | --- |
| [Fleet manager](../src/core/fleet-manager.ts) | Fleet and agent state and task assignment |
| [Task queue](../src/core/task-queue.ts) | Local queue logic |
| [Fleet overview](../src/web/components/FleetOverview.tsx) and [agent card](../src/web/components/AgentCard.tsx) | React components, not a complete Vite app |
| [Fleet manager tests](../tests/fleet-manager.test.ts) | The checked-in Vitest test file |

For design intent, see [Control Plane MVP](../CONTROL-PLANE-MVP.md) and [Control Plane UI Spec](../CONTROL-PLANE-UI-SPEC.md). This checkout does not provide a separately installed `@agentfleet/core` package, API server, or a verified path to connect OpenClaw, GitHub, or Slack.

## Choose a check

Use [Development setup](../CONTRIBUTING.md#development-setup) for the package and lockfile requirements. For a docs change, use [offline verification](../SWARM_READY.md#verification-starting-point). It does not start agents, services, or integrations.