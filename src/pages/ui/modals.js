import React from 'react'
import { Card, Button, Radio } from 'antd'
import './ui.less'
export default class Buttons extends React.Component {

  render() {
    return (
      <div>
        <Card title="基础模态框">
          <Button>Open</Button>
          <Button>自定义页脚</Button>
          <Button>顶部20px弹框</Button>
          <Button>水平垂直居中</Button>
        </Card>
      </div>
    );
  }
}