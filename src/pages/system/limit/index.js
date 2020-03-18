import React from 'react'
import { useState,useEffect,useRef } from 'react'
import { Table,Button,Modal,Form,Input,Select,message } from 'antd'
import axios from '../../../static/js/axios'
import { withRouter } from 'react-router-dom'
import { ExclamationCircleOutlined } from '@ant-design/icons'
const { Option } = Select
const { confirm } = Modal

function Limit(){
    const [dataSource,setdataSource]=useState([]) //表格数据
    //获取权限
    const getTableData=()=>{
        axios.get('/limits').then(res=>{
            for(let i of res){
                i.key=i._id
            }
            setdataSource(res)
        })
    }
    const deleteTableData=(data)=>{
        confirm({
            title: '提示',
            icon: <ExclamationCircleOutlined />,
            content: '确认删除这条数据？',
            okText: '确认',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
              console.log('OK');
              axios.delete('/limits?_id='+data._id).then(()=>{
                  message.success('权限删除成功')
                  getTableData()
              })
            }
          });
    }
    useEffect(()=>{
        getTableData()
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
                    <Button type="primary" size="small" onClick={()=>deleteTableData(data)} danger>删除</Button>
                </span>
            ),
        }
    ]
    const [visible,setvisible]=useState(false) //新增弹窗是否可见
    const [title,settitle]=useState('')
    const hideModal=()=>{
        setvisible(false)
        setrowData({})
    }
    const [rowData,setrowData]=useState({})
    //新增权限
    const addRow=()=>{
        setvisible(true)
        settitle('新增权限')
    }
    //修改权限
    const changeRow=(data)=>{
        setvisible(true)
        setrowData(data)
        settitle('修改权限')
    }
    return(
        <div className="container">
            <div className="table-edit">
                <Button type="primary" onClick={()=>{addRow()}}>新增</Button>
            </div>
            <Table dataSource={dataSource} columns={columns} />;
            <ModalForm visible={visible} onCancel={hideModal} rowData={rowData} title={title} getTableData={getTableData}></ModalForm>
        </div>
    )
}
//新增弹窗组件
function ModalForm({ visible, onCancel,rowData,title,getTableData }){
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
        if(rowData._id){
            value._id=rowData._id
            //修改权限接口
            axios.put('/limits',value).then(()=>{
                message.success('权限修改成功')
                getTableData()
            })
        }else{
            //新增权限接口
            axios.post('/limits',value).then(()=>{
                message.success('权限新增成功')
                getTableData()
            })
        }
        onCancel()
    }
    //数据回填
    if(Object.keys(rowData).length>0){
        form.setFieldsValue({
            'limitName':rowData.limitName,
            'limitContent':rowData.limitContent,
            'limitType':new Number(rowData.limitType).toString()
        })
    }

    return(
        <Modal
            title={title}
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
                        <Input/>
                    </Form.Item>
                    <Form.Item label="权限内容" name="limitContent" rules={[{required: true,message: '请输入权限内容!'}]}>
                        <Input/>
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