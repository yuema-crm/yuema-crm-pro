// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 部门列表 GET /api/department */
export async function getDepartmentList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDepartmentListParams,
  options?: { [key: string]: any },
) {
  return request<{
    data?: API.Department[];
    total?: number;
    totalPage?: number;
    current?: number;
    pageSize?: number;
  }>('/api/department', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/department */
export async function DepartmentControllerCreate(
  body: API.CreateDepartmentDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/department', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/department/${param0} */
export async function DepartmentControllerFindOne(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DepartmentControllerFindOneParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/department/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /api/department/${param0} */
export async function DepartmentControllerRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DepartmentControllerRemoveParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/department/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /api/department/${param0} */
export async function DepartmentControllerUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DepartmentControllerUpdateParams,
  body: API.UpdateDepartmentDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/department/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
