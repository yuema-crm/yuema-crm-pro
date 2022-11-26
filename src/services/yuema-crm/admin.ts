// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /api/admin */
export async function AdminControllerFindAll(options?: { [key: string]: any }) {
  return request<any>('/api/admin', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/admin */
export async function AdminControllerCreate(
  body: API.CreateAdminDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/admin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/admin/${param0} */
export async function AdminControllerFindOne(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AdminControllerFindOneParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/admin/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /api/admin/${param0} */
export async function AdminControllerRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AdminControllerRemoveParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/admin/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /api/admin/${param0} */
export async function AdminControllerUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AdminControllerUpdateParams,
  body: API.UpdateAdminDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/admin/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 获得验证码 GET /api/admin/captcha */
export async function getCaptcha(options?: { [key: string]: any }) {
  return request<API.ResponseMapDto & { data?: API.Captcha }>('/api/admin/captcha', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 登录的当前用户 GET /api/admin/current/user */
export async function currentUser(options?: { [key: string]: any }) {
  return request<API.ResponseMapDto & { data?: API.Admin }>('/api/admin/current/user', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 登录 POST /api/admin/login */
export async function login(body: API.LoginDto, options?: { [key: string]: any }) {
  return request<API.ResponseMapDto & { data?: API.LoginResponseDto }>('/api/admin/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 退出 POST /api/admin/outLogin */
export async function outLogin(options?: { [key: string]: any }) {
  return request<any>('/api/admin/outLogin', {
    method: 'POST',
    ...(options || {}),
  });
}
