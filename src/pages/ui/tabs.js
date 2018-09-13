import React from 'react';
import { Card, Button, Tabs, message, Icon } from 'antd'
import './ui.less'
const TabPane = Tabs.TabPane;

export default class Buttons extends React.Component {

  newTabIndex = 0;
  handleCallback = (key) => {
    message.info("Hi,您选择了页签：" + key)
  }

  componentWillMount() {
    const panes = [
      {
        title: 'Relaxed',
        content: 'rhythm',
        key: '1'
      },
      {
        title: 'English',
        content: 'To get to you, to get to you',
        key: '2'
      },
      {
        title: 'Ballad',
        content: '十个肉筋 十个板筋 四个腰子 四个鸡翅 二个烤蒜 二个小抄片 一盘花生 一盘毛豆 五瓶啤酒',
        key: '3'
      }
    ]
    this.setState({
      activeKey: panes[0].key,
      panes
    })
  }

  onChange = (activeKey) => {
    this.setState({
      activeKey
    })
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }

  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: activeKey, content: 'New Tab Pane', key: activeKey });
    this.setState({ panes, activeKey });
  }
  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  }
  render() {
    return (
      <div>
        <Card title="tab切换" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
            <TabPane tab="Relaxed" key="1">rhythm</TabPane>
            <TabPane tab="English" key="2">To get to you, to get to you</TabPane>
            <TabPane tab="Ballad " key="3">十个肉筋 十个板筋 四个腰子 四个鸡翅 二个烤蒜 二个小抄片 一盘花生 一盘毛豆 五瓶啤酒</TabPane>
          </Tabs>
        </Card>
        <Card title="tab切换-禁止" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
            <TabPane tab="Relaxed" key="1">rhythm</TabPane>
            <TabPane tab="English" key="2" disabled>To get to you, to get to you</TabPane>
            <TabPane tab="Ballad " key="3">十个肉筋 十个板筋 四个腰子 四个鸡翅 二个烤蒜 二个小抄片 一盘花生 一盘毛豆 五瓶啤酒</TabPane>
          </Tabs>
        </Card>
        <Card title="tab切换-带图标" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
            <TabPane tab={<span><Icon type="plus" />Relaxed</span>} key="1">rhythm</TabPane>
            <TabPane tab={<span><Icon type="edit" />English</span>} key="2">To get to you, to get to you</TabPane>
            <TabPane tab={<span><Icon type="delete" />Ballad</span>} key="3">十个肉筋 十个板筋 四个腰子 四个鸡翅 二个烤蒜 二个小抄片 一盘花生 一盘毛豆 五瓶啤酒</TabPane>
          </Tabs>
        </Card>
        <Card title="tab切换-带图标编辑" className="card-wrap">
          <Tabs
            onChange={this.onChange}
            activeKey={this.state.activeKey}
            type="editable-card"
            onEdit={this.onEdit}
          >
            {
              this.state.panes.map((panel) => {
                return <TabPane
                  tab={panel.title}
                  key={panel.key}
                />
              })
            }
          </Tabs>
        </Card>
      </div>
    )
  }
}