import React from 'react'
import { Card, Button, Modal } from 'antd'
import './ui.less'
export default class Buttons extends React.Component {

  state = {
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false
  }

  handleOpen = (type) => {
    this.setState({
      [type]: true
    })
  }

  handleConfirm = (type) => {
    Modal[type]({
      title: '确认?',
      content: '你确认你学会了React了吗?',
      onOk() {
        console.log('OK')
      },
      onCancel() {
        console.log('Cancel')
      }
    })
  }

  render() {
    return (
      <div>
        <Card title="基础模态框">
          <Button type="primary" onClick={() => this.handleOpen('showModal1')}>Open</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal2')}>自定义页脚</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal3')}>顶部20px弹框</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal4')}>水平垂直居中</Button>
        </Card>
        <Card title="信息确认框">
          <Button type="primary" onClick={() => this.handleConfirm('Confirm')}>Confirm</Button>
          <Button type="primary" onClick={() => this.handleConfirm('Info')}>Info</Button>
          <Button type="primary" onClick={() => this.handleConfirm('Success')}>Success</Button>
          <Button type="primary" onClick={() => this.handleConfirm('Warning')}>Warning</Button>
        </Card>
        <Modal
          title="React"
          visible={this.state.showModal1}
          onCancel={() => {
            this.setState({
              showModal1: false
            })
          }}>
          <p>十个肉筋 十个板筋 四个腰子 四个鸡翅 二个烤蒜 二个小抄片 一盘花生 一盘毛豆 五瓶啤酒</p>
        </Modal>
        <Modal
          title="React"
          visible={this.state.showModal2}
          okText="好的"
          cancelText="算了"
          onCancel={() => {
            this.setState({
              showModal2: false
            })
          }}
        >
          <p>我喜欢网易云音乐，喜欢这里的每一个听众，他们明明没什么文字功底，读书写作文都全是抄的，但在这里，他们居然能瞎扯淡地写出这么多有水准的话。</p>
        </Modal>
        <Modal
          title="React"
          style={{ top: 20 }}
          visible={this.state.showModal3}
          onCancel={() => {
            this.setState({
              showModal3: false
            })
          }}
        >
          <p>年纪越大越会明白，少年时曾说过的话，不管多么情真意切，最后也终流于天真，但是有什么关系呢，那不代表它们就是谎言。我是真心希望，如你所言，在我之后，你再没有不能失去的东西。而我再爱上的人，也无一人像你一分。只愿你平安喜乐，愿我们今生，天涯永不再相见。</p>
        </Modal>
        <Modal
          title="React"
          wrapClassName="vertical-center-modal"
          visible={this.state.showModal4}
          onCancel={() => {
            this.setState({
              showModal4: false
            })
          }}
        >
          <p>年轻时我想变成任何人，除了我自己</p>
        </Modal>
      </div>
    );
  }
}