import type {ProColumns} from "@ant-design/pro-components";
import {PageContainer, ProTable} from "@ant-design/pro-components";
// @ts-ignore
import {deleteDepartment, getDepartmentList} from "@/services/yuema-crm/department";
import {Button, message, Popconfirm} from "antd";
import {useRef} from "react";
import type {ActionType} from "@ant-design/pro-table/es/typing";

function Index() {
  const actionRef = useRef<ActionType>()
  const columns: ProColumns<API.Department>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      hideInSearch: true
    },
    {
      title: '部门名称',
      dataIndex: 'name',
      copyable: true
    },
    {
      title: '状态',
      dataIndex: 'status',
      hideInSearch: true,
      ellipsis: true,
      valueType: 'select',
      valueEnum: {
        0: {
          text: '禁用',
          status: 'Error',
        },
        1: {
          text: '正常',
          status: 'Success',
        }
      },
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      valueType: 'dateRange',
      hideInTable: true,
      search: {
        transform: (value: any) => ({startDate: value[0], endDate: value[1]}),
      },
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      hideInSearch: true,
      valueType: 'dateTime',
    },
    {
      title: '操作',
      valueType: 'option',
      render: (_, entity) => [
        <Button type={'primary'} key={'edit'}>编辑</Button>,
        <Button type={'primary'} key={'create'}>新建</Button>,
        <Popconfirm title={'删除'} key={'delete'} onConfirm={async () => {
          const res = await deleteDepartment({id: entity.id})
          if (res.success) {
            message.success('删除成功')
            actionRef.current?.reload()
          } else {
            message.error(res.errorMessage)
          }
        }}>
          <Button type={'primary'} danger>删除</Button>,
        </Popconfirm>
      ]
    },
  ]
  return (
    <PageContainer>
      <ProTable<API.Department, API.getDepartmentListParams>
        expandable={{
          defaultExpandAllRows: true,
        }}
        actionRef={actionRef}
        columns={columns}
        rowKey={'id'}
        request={async (p: API.getDepartmentListParams) => {
          const res = await getDepartmentList({...p})

          function generateTree(dataList: (API.Department & { children?: API.Department[] })[], parentId = 0) {
            const arr = []
            for (const d of dataList) {
              if (d.parentId === parentId) {
                d.children = generateTree(dataList, d.id)
                if (d.children.length === 0) {
                  delete d.children
                }
                arr.push(d)
              }
            }
            return arr
          }

          if (res.data) {
            res.data = generateTree(res.data, 0)
          }
          return res
        }}/>
    </PageContainer>
  );
}

export default Index;
