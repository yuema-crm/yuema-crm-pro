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

  type LoginDto = {
    /** 用户名 */
    username: string;
    /** 密码 */
    password: string;
    /** 登录类型 */
    type: 'account' | 'mobile';
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
}
