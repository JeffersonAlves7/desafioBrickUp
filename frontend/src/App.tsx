import { Breadcrumb, Layout, theme } from "antd";
import Todos from "./todos/Todos";
const { Header, Content, Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Header style={{ display: "flex", alignItems: "center" }}>
        <h1 style={{ color: "white" }}>Todo</h1>
      </Header>
      <Content
        style={{
          padding: "0 48px",
          margin: "0 auto",
          width: "90vw",
          maxWidth: "1200px",
        }}
      >
        <Breadcrumb
          style={{ margin: "16px 0" }}
          items={[
            {
              title: "Home",
            },
            {
              title: "TodoList",
            },
          ]}
        />
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Todos />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Brick Up Challenge ©2023 Created by Jefferson Alves de Carvalho
      </Footer>
    </Layout>
  );
};

export default App;
