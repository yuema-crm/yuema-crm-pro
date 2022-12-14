declare namespace API {
  type Admin = {
    /** 用户名 */
    username: string;
    /** 头像 */
    avatar?: string;
    /** 密码 */
    password?: string;
  };

  type AdminControllerFindOneParams = {
    id: string;
  };

  type AdminControllerRemoveParams = {
    id: string;
  };

  type AdminControllerUpdateParams = {
    id: string;
  };

  type Captcha = {
    /** 验证码的key */
    cacheKey: string;
    /** 验证码，base64内容 */
    captcha: string;
  };

  type CreateAdminDto = {
    /** 用户名 */
    username: string;
    /** 密码 */
    password: string;
  };

  type CreateDepartmentDto = {
    /** 部门名称 */
    name: string;
  };

  type deleteDepartmentParams = {
    id: number;
  };

  type Department = {
    /** 部门id */
    id: number;
    /** 状态 */
    status: string;
    /** 父级id */
    parentId: number;
    /** 创建时间 */
    createdAt: string;
    /** 更新时间 */
    updatedAt: string;
    /** 删除时间 */
    deletedAt: string;
  };

  type DepartmentControllerFindOneParams = {
    id: string;
  };

  type DepartmentControllerUpdateParams = {
    id: string;
  };

  type getDepartmentListParams = {
    /** 当前页 */
    current?: number;
    /** 每一页数量 */
    pageSize?: number;
    name: string;
    /** 状态：1可用，0禁用 */
    status: string[];
    /** 开始时间 */
    startDate?: string;
    /** 结束时间 */
    endDate?: string;
  };

  type LoginDto = {
    /** 用户名 */
    username: string;
    /** 密码 */
    password: string;
    /** 登录类型：account或者mobile */
    type: string;
    /** 用于校验验证码的key */
    cacheKey: string;
    /** 验证码 */
    captcha: string;
  };

  type LoginResponseDto = {
    /** 用户名 */
    username: string;
    /** token */
    token: string;
    /** status */
    status: string;
    /** 登录类型 */
    type: string;
  };

  type PaginatedDto = {
    /** 状态：true表示成功；false表示失败 */
    success: boolean;
    /** 提示信息 */
    errorMessage?: string;
  };

  type ResponseArrayDto = {
    /** 状态：true表示成功；false表示失败 */
    success: boolean;
    /** 提示信息 */
    errorMessage?: string;
  };

  type ResponseMapDto = {
    /** 状态：true表示成功；false表示失败 */
    success: boolean;
    /** 提示信息 */
    errorMessage?: string;
  };

  type UpdateAdminDto = {
    /** 用户名 */
    username: string;
  };

  type UpdateDepartmentDto = {
    /** 部门名称 */
    name: string;
  };
}
