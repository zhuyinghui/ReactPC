import React from 'react'
import { useState,useEffect,useRef } from 'react'
import { Table,Button,Modal,Form,Input,Select } from 'antd'
import { getLimit } from '../../../static/js/limitReq'
import { withRouter } from 'react-router-dom'
const { Option } = Select;

function Limit(){
    const [dataSource,setdataSource]=useState([]) //表格数据
    useEffect(()=>{
        getLimit().then(res=>{
            for(let i of res){
                i.key=i._id
            }
            setdataSource(res)
        })
    },[])
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
            render:(d)=>{
                if(d===1){
                    return '页面权限'
                }else if(d===2){
                    return '数据权限'
                }else{
                    return '操作权限'
                }
            }
        },
        {
            title:'操作',
            key: 'action',
            render: (data) => (
                <span>
                    <Button type="primary" size="small" onClick={()=>changeRow(data)}>修改</Button>
                    <Button type="primary" size="small" danger>删除</Button>
                </span>
            ),
        }
    ]
    const [visible,setvisible]=useState(false) //新增弹窗是否可见
    const showModal=()=>{
        setvisible(true)
    }
    const hideModal=()=>{
        setvisible(false)
        setrowData([])
    }
    const [rowData,setrowData]=useState([])
    const changeRow=(data)=>{
        setvisible(true)
        setrowData(data)
    }
    return(
        <div className="container">
            <div className="table-edit">
                <Button type="primary" onClick={()=>{showModal()}}>新增</Button>
            </div>
            <Table dataSource={dataSource} columns={columns} />;
            <ModalForm visible={visible} onCancel={hideModal} rowData={rowData}></ModalForm>
        </div>
    )
}
//新增弹窗组件
function ModalForm({ visible, onCancel,rowData }){
    console.log(rowData)
    const [form] = Form.useForm();
    const prevVisibleRef = useRef();
    useEffect(() => {
        prevVisibleRef.current = visible;
    }, [visible]);
    const prevVisible=prevVisibleRef.current
    useEffect(() => {
        //关闭弹窗时重置表单
        if (!visible && prevVisible) {
            form.resetFields();
        }
    }, [visible]);
    const onOk = () => {
      form.submit();
    };
    //表单提交
    const onFinish=(value)=>{
        console.log(value)
        onCancel()
    }
    //获取当前选择行的数据

    return(
        <Modal
            title="新增权限"
            visible={visible}
            onOk={onOk}
            onCancel={onCancel}
            okText="确认"
            cancelText="取消"
            >
                <Form
                form={form} 
                name="normal_login"
                className="login-form"
                onFinish={onFinish}
                >
                    <Form.Item label="权限名称" name="limitName" rules={[{required: true,message: '请输入权限名称!'}]}>
                        <Input value={rowData.limitName||''}/>
                    </Form.Item>
                    <Form.Item label="权限内容" name="limitContent" rules={[{required: true,message: '请输入权限内容!'}]}>
                        <Input value="55"/>
                    </Form.Item>
                    <Form.Item name="limitType" label="权限类型" rules={[{ required: true ,message: '请选择权限类型!'}]}>
                        <Select placeholder="请选择">
                            <Option value="1">页面权限</Option>
                            <Option value="2">数据权限</Option>
                            <Option value="3">操作权限</Option>
                        </Select>
                    </Form.Item>
                </Form>
        </Modal>
    )
}
export default withRouter(Limit)