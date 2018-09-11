import React from 'react'
import { Card, Button, Spin, Icon, Alert } from 'antd'
import './ui.less'
export default class Loadings extends React.Component {

  render() {
    const icon = <Icon type="loading" style={{ fontSize: 24 }} />
    const iconLoading = <Icon type="loading" style={{ fontSize: 24 }} />
    return (
      <div>
        <Card title="Spin用法" className="card-wrap">
          <Spin size="small" />
          <Spin style={{ margin: '0 10px' }} />
          <Spin size="large" />
          <Spin indicator={icon} style={{ marginLeft: 10 }} spinning={true} />
        </Card>
        <Card title="内容遮罩" className="card-wrap">
          <Alert
            message="Di-got"
            description="美丽的代沫, 只一霎的烟火"
            type="info"
            style={{ marginBottom: 10 }}
          />
          <Spin>
            <Alert
              message="Di-got"
              description="I've been running with the wolves"
              type="warning"
              style={{ marginBottom: 10 }}
            />
          </Spin>
          <Spin tip="加载中...">
            <Alert
              message="Di-got"
              description="To get to you, to get to you"
              type="warning"
              style={{ marginBottom: 10 }}
            />
          </Spin>
          <Spin indicator={iconLoading}>
            <Alert
              message="Di-got"
              description="如果我们不曾相遇,我会是在哪里"
              type="warning"
            />
          </Spin>
        </Card>
      </div>
    );
  }
}