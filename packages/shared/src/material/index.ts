export interface ICategory {
  name: string
}

export interface IMaterialData {
  /** 物料版本 */
  version: string
  /** 物料源 */
  source: string
}

/** 物料 */
export interface IMaterial extends IMaterialData {
  /** ID */
  id: number
  /** 类型 */
  type: string
  /** 类目 */
  category: ICategory
  /** 物料信息 */
  data: IMaterialData[]
}

export interface IMaterialLoader {
  /** 类型 */
  type: string
  /** 加载函数 */
  laod(material: IMaterial): Promise<any>
}
