# ⚡️ Custify WebSocket Server

<div align="center">

![Custify WebSocket Logo](https://img.shields.io/badge/Custify-WebSocket-green?style=for-the-badge&logo=websocket)

**Real-time WebSocket server powering live customer updates in Custify CRM**

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![WebSocket](https://img.shields.io/badge/WebSocket-010101?style=for-the-badge&logo=websocket&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
[![ts-node](https://img.shields.io/badge/ts--node-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://github.com/TypeStrong/ts-node)

[![GitHub stars](https://img.shields.io/github/stars/RoelCrabbe/Custify-WebSocket?style=social)](https://github.com/RoelCrabbe/Custify-WebSocket/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/RoelCrabbe/Custify-WebSocket?style=social)](https://github.com/RoelCrabbe/Custify-WebSocket/network/members)
[![GitHub issues](https://img.shields.io/github/issues/RoelCrabbe/Custify-WebSocket)](https://github.com/RoelCrabbe/Custify-WebSocket/issues)

</div>

---

## 🚀 About Custify WebSocket Server

The Custify WebSocket Server is a lightweight, real-time messaging layer that enables live updates across the Custify CRM platform. It connects the [Custify Frontend](https://github.com/RoelCrabbe/Custify-React) and [Custify Backend](https://github.com/RoelCrabbe/Custify-TypeScript) using the WebSocket protocol, providing seamless real-time communication for enhanced user experience.

Built with Node.js and TypeScript, this service ensures high-speed, bidirectional communication with minimal setup and maximum reliability.

### ✨ Key Features

- **⚡ Real-Time Communication** - Instant updates for connected clients
- **🧠 Lightweight Architecture** - Minimal dependencies, fast startup
- **🔐 Secure Connections** - Built-in connection validation and security
- **🔧 Customizable Protocol** - Easily extendable message handling
- **🔄 Cross-Service Integration** - Seamless integration with Frontend & Backend
- **📊 Connection Management** - Efficient client connection handling
- **🛡️ Error Handling** - Robust error handling and recovery
- **📈 Scalable Design** - Built to handle multiple concurrent connections

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Execution**: ts-node
- **Communication**: WebSocket (`ws` package)
- **Development**: TypeScript compiler
- **Package Management**: npm/yarn

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- [Custify Backend](https://github.com/RoelCrabbe/Custify-TypeScript) (recommended)
- [Custify Frontend](https://github.com/RoelCrabbe/Custify-React) (recommended)

### Quick Start

1. **Clone the repository**

    ```bash
    git clone https://github.com/RoelCrabbe/Custify-WebSocket.git
    cd Custify-WebSocket
    ```

2. **Install dependencies**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Environment Setup**

    Create a `.env` file in the root directory:

    ```env
    WS_PORT=8765
    NODE_ENV=development
    ```

4. **Start the development server**

    ```bash
    npm start
    # or
    yarn start
    ```

5. **Verify the server is running**

    The WebSocket server will be available at:

    ```
    ws://localhost:8765
    ```

## 🔧 Configuration

### Environment Variables

| Variable   | Description               | Required | Default       |
| ---------- | ------------------------- | -------- | ------------- |
| `WS_PORT`  | Port for WebSocket server | ✅       | `8765`        |
| `NODE_ENV` | Environment mode          | ❌       | `development` |

## 📂 Project Structure

```
Custify-WebSocket/
├── src/
│   ├── server.ts          # Main WebSocket server
│   ├── types/             # TypeScript type definitions
│   └── utils/             # Utility functions
├── .env                   # Environment configuration
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md             # Project documentation
```

## 🤝 Contributing

We welcome contributions to the Custify WebSocket Server! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Keep the server minimal and maintainable
- Use clear message types and handlers
- Test with both backend and frontend integrations
- Implement proper error handling
- Document new message types
- Use conventional commit messages

## 📚 Documentation

For detailed documentation, visit our [Documentation Wiki](https://github.com/RoelCrabbe/Custify-WebSocket/wiki).

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Roel Crabbe**

- GitHub: [@RoelCrabbe](https://github.com/RoelCrabbe)

## 🔗 Related Projects

- **Frontend**: [Custify-React](https://github.com/RoelCrabbe/Custify-React) - React frontend for Custify CRM
- **Backend**: [Custify-TypeScript](https://github.com/RoelCrabbe/Custify-TypeScript) - TypeScript backend API
- **Mobile**: Coming soon - React Native mobile app

## 🙏 Acknowledgments

- Built with [Node.js](https://nodejs.org/)
- WebSocket communication via [ws package](https://github.com/websockets/ws)
- TypeScript for type safety
- ts-node for development execution

## 📊 Project Status

**🚧 In Progress** - This project is actively being developed. Features and documentation may change frequently.

---

<div align="center">

**Star ⭐ this repository if you found it helpful!**

[Report Bug](https://github.com/RoelCrabbe/Custify-WebSocket/issues) · [Request Feature](https://github.com/RoelCrabbe/Custify-WebSocket/issues) · [Documentation](https://github.com/RoelCrabbe/Custify-WebSocket/wiki)

</div>
