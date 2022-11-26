import type {ProColumns} from "@ant-design/pro-components";
import {PageContainer, ProTable} from "@ant-design/pro-components";
// @ts-ignore
import {getDepartmentList} from "@/services/yuema-crm/department";

function Index() {
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
      title: '创建时间',
      dataIndex: 'createdAt',
      valueType: 'dateRange',
      search: {
        transform: (value: any) => ({startDate: value[0], endDate: value[1]}),
      },
    },
  ]
  return (
    <PageContainer>
      <ProTable<API.Department, API.getDepartmentListParams>
        columns={columns}
        rowKey={'id'}
        request={async (p: API.getDepartmentListParams) => {
          const res = await getDepartmentList(p)

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

          res.data = generateTree(res.data, 0)
          return res
        }}/>
    </PageContainer>
  );
}

export default Index;
