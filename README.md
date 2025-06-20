# ⚡️ Custify WebSocket Server

<div align="center">

**Real-time WebSocket server powering live customer updates in Custify CRM**

</div>

---

## 🚀 About Custify WebSocket

The **Custify WebSocket Server** is a lightweight, real-time messaging layer that enables live updates across the Custify CRM platform. It connects the **Frontend** and **Backend** using the WebSocket protocol, supporting features like:

- Live customer status updates
- Real-time dashboard syncing
- Collaborative interaction without refresh

Built with **Node.js** and **TypeScript**, this service ensures high-speed, bidirectional communication with minimal setup.

---

## ✨ Key Features

- ⚡ **Real-Time Communication** – Instant updates for connected clients
- 🧠 **Lightweight Architecture** – Minimal dependencies, fast startup
- 🔐 **Customizable Message Protocol** – Easily extendable for your domain
- 🔧 **Simple Config** – Environment-based port configuration
- 🔄 **Cross-Service Integration** – Designed to work with Custify Frontend & Backend

---

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Execution**: ts-node
- **Communication**: WebSocket (`ws` package)

---

## 📦 Installation

### Prerequisites

- Node.js (v18+)
- npm or yarn

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
    ```

4. **Run the server**

    ```bash
    npm start
    ```

5. **Verify it's working**  
   Once running, the WebSocket server will be available at:

    ```bash
    ws://localhost:8765
    ```

---

## 📂 Project Structure

```
Custify-WebSocket/
├── server.ts          # Main WebSocket server entry
├── .env               # Environment config
├── package.json
└── tsconfig.json
```

---

## 🔧 Configuration

### Environment Variables

| Variable  | Description               | Required | Default |
| --------- | ------------------------- | -------- | ------- |
| `WS_PORT` | Port for WebSocket server | ✅       | `8765`  |

---

## 📡 Example Usage

### Connect from Client (TypeScript/JS)

```ts
const socket = new WebSocket('ws://localhost:8765');

socket.onopen = () => {
    console.log('Connected to Custify WebSocket Server');
    socket.send(JSON.stringify({ type: 'subscribe', channel: 'customers' }));
};

socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log('Received:', data);
};
```

---

## 🤝 Contributing

We welcome contributions to the Custify WebSocket Server! To get started:

1. Fork the repo
2. Create a feature branch:
    ```bash
    git checkout -b feature/MyFeature
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add MyFeature"
    ```
4. Push your branch:
    ```bash
    git push origin feature/MyFeature
    ```
5. Open a Pull Request

### Guidelines

- Follow TypeScript best practices
- Keep the server minimal and maintainable
- Use clear message types and handlers
- Test with both backend and frontend integrations

---

## 📝 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Roel Crabbe**  
GitHub: [@RoelCrabbe](https://github.com/RoelCrabbe)

---

## 🔗 Related Projects

- [Custify-React (Frontend)](https://github.com/RoelCrabbe/Custify-React)
- [Custify-TypeScript (Backend)](https://github.com/RoelCrabbe/Custify-TypeScript)

---

<div align="center">

⭐ Star this repository if you find it useful  
🐛 [Report Bug](https://github.com/RoelCrabbe/Custify-WebSocket/issues) · 🚀 [Request Feature](https://github.com/RoelCrabbe/Custify-WebSocket/issues)

</div>
