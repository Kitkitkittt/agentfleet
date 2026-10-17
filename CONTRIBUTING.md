# Contributing to AgentFleet

Thank you for your interest in contributing to AgentFleet! We welcome contributions from the community.

## How to Contribute

### Reporting Issues

- Check if the issue already exists
- Include steps to reproduce
- Provide system information
- Include error messages and logs

### Suggesting Features

- Open a discussion first
- Explain the use case
- Consider implementation complexity
- Be open to feedback

### Code Contributions

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Coding Standards

- Use TypeScript where possible
- Follow existing code style
- Write tests for new features
- Update documentation
- Keep commits atomic and clear

### Testing

```bash
# Run unit tests
npm test

# Run specific test file
npm test -- path/to/test

# Run with coverage
npm test -- --coverage
```

CI runs `npm ci`, `npm test`, and `npm run lint` independently on Node 18 and 20.
The root lockfile was generated with npm 10.8.2 using
`npm install --package-lock-only --ignore-scripts --before=2026-02-12T13:25:14Z`,
the original source commit's timestamp, so restoring CI does not incidentally
upgrade dependencies to releases published after that source snapshot.
Dependency upgrades should be reviewed separately.

Lint uses ESLint's recommended correctness rules with the TypeScript parser and
the TypeScript-aware unused-variable rule. The matching parser/plugin 8.55.0
dependencies support both CI Node versions; no strict TypeScript policy is added.
They were added with `npm install --save-dev --package-lock-only --ignore-scripts
--before=2026-02-12T13:25:14Z @typescript-eslint/parser@^8.55.0
@typescript-eslint/eslint-plugin@^8.55.0` after the initial lockfile generation.

### Documentation

- Update README.md for user-facing changes
- Add JSDoc comments for public APIs
- Create examples for new features
- Keep docs concise and clear

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/agentfleet
cd agentfleet

# Install the locked dependencies (Node 18 or 20)
npm ci

# Create a branch
git checkout -b feature/your-feature

# Run development server
npm run dev
```

## Pull Request Process

1. Update documentation
2. Add tests for new functionality
3. Ensure all tests pass
4. Update CHANGELOG.md
5. Request review from maintainers

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive criticism
- Assume good intentions

## Questions?

Join our [Discord](https://discord.gg/agentfleet) or open a discussion on GitHub.

Thank you for contributing! 🚀