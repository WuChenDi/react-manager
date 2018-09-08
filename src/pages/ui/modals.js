import React from 'react'
import { Card, Button, Modal } from 'antd'
import './ui.less'
export default class Buttons extends React.Component {

  state = {
    showModal1: false
  }

  handleOpen = (type) => {
    this.setState({
      showModal1: true
    })
  }
  render() {
    return (
      <div>
        <Card title="基础模态框">
          <Button type="primary" onClick={this.handleOpen('showModal1')}>Open</Button>
          <Button type="primary" onClick={this.handleOpen('showModal2')}>自定义页脚</Button>
          <Button type="primary" onClick={this.handleOpen('showModal3')}>顶部20px弹框</Button>
          <Button type="primary" onClick={this.handleOpen('showModal4')}>水平垂直居中</Button>
        </Card>
        <Modal title="React" visible={this.state.showModal1} onCancel={() => { }}>
          <p>WuChenDi系统</p>
        </Modal>
      </div>
    );
  }
}