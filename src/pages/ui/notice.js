import React from 'react'
import { Card, Button, notification } from 'antd'
import './ui.less'

export default class Buttons extends React.Component {
  openNotification = (type, direction) => {
    if (direction) {
      notification.config({
        placement: direction
      })
    }
    notification[type]({
      message: '阳光下的星星',
      description: '你说云落泪了风会吹干它,我问风叹息又怎么安慰呢'
    });
  }

  render() {
    return (
      <div>
        <Card title="通知提醒框" className="card-wrap">
          <Button type="primary" onClick={() => this.openNotification('success')}>Success</Button>
          <Button type="primary" onClick={() => this.openNotification('info')}>Info</Button>
          <Button type="primary" onClick={() => this.openNotification('warning')}>Warning</Button>
          <Button type="primary" onClick={() => this.openNotification('error')}>Error</Button>
        </Card>
        <Card title="通知提醒框" className="card-wrap">
          <Button type="primary" onClick={() => this.openNotification('success', 'topLeft')}>Success-TopLeft</Button>
          <Button type="primary" onClick={() => this.openNotification('info', 'topRight')}>Info-TopRight</Button>
          <Button type="primary" onClick={() => this.openNotification('warning', 'bottomLeft')}>Warning-BottomLeft</Button>
          <Button type="primary" onClick={() => this.openNotification('error', 'bottomRight')}>Error-BottomRight</Button>
        </Card>
      </div>
    )
  }
}