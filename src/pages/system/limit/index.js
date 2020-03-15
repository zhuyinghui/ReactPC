import { React,useState,useEffect } from 'react'
import { Table,Button,Modal,Form,Input,Select,Option } from 'antd'
import { getLimit } from '../../../static/js/limitReq'
import { withRouter } from 'react-router-dom'

function Limit(props){
    const [dataSource,setdataSource]=useState([]) //表格数据
    useEffect(()=>{
        getLimit().then(res=>{
            setdataSource(res)
        })
    })
    const columns = [
        {
            title: '权限名称',
            dataIndex: 'limitName',
            key: 'limitName',
        },
        {
            title: '权限内容',
            dataIndex: 'limitContent',
            key: 'limitContent',
        },
        {
            title: '权限类型',
            dataIndex: 'limitType',
            key: 'limitType',
        },
        {
            title:'操作',
            key: 'action',
            render: (text, record) => (
                <span>
                    <Button type="primary" size="small">修改</Button>
                    <Button type="primary" size="small" danger>删除</Button>
                </span>
            ),
        }
    ]
    const [visible,setvisible]=useState(false) //新增弹窗是否可见
    const showModel=()=>{
        setvisible(true)
    }
    const handleOk=()=>{
        setvisible(false)
    }
    const handleCancel=()=>{
        setvisible(false)
    }
    const onFinish = (value) => {
        console.log(value);
        
    };
    console.log(props)
    return(
        <div className="container">
            <div className="table-edit">
                <Button type="primary" onClick={()=>{showModel()}}>新增</Button>
            </div>
            <Table dataSource={dataSource} columns={columns} />;

            <Modal
            title="新增权限"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            okText="确认"
            cancelText="取消"
            >
                <Form
                name="normal_login"
                className="login-form"
                onFinish={onFinish}
                >
                    <Form.Item name="limitName" rules={[{required: true,message: '请输入权限名称!'}]}>
                        <InputEvent/>
                    </Form.Item>
                    <Form.Item name="limitContent" rules={[{required: true,message: '请输入权限内容!'}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="limitType" label="权限类型" rules={[{ required: true }]}>
                        <Select placeholder="请选择">
                            <Option value="1">页面权限</Option>
                            <Option value="2">数据权限</Option>
                            <Option value="3">操作权限</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}
export default withRouter(Limit)