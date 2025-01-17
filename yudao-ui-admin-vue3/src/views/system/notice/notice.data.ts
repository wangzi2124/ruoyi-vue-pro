import { reactive } from 'vue'
import { useI18n } from '@/hooks/web/useI18n'
import { required } from '@/utils/formRules'
import { DICT_TYPE } from '@/utils/dict'
import { VxeCrudSchema, useVxeCrudSchemas } from '@/hooks/web/useVxeCrudSchemas'
const { t } = useI18n() // 国际化

// 表单校验
export const rules = reactive({
  title: [required],
  type: [required]
})

// CrudSchema
const crudSchemas = reactive<VxeCrudSchema>({
  primaryKey: 'id',
  primaryType: 'seq',
  action: true,
  columns: [
    {
      title: '公告标题',
      field: 'title',
      isSearch: true
    },
    {
      title: '公告类型',
      field: 'type',
      dictType: DICT_TYPE.SYSTEM_NOTICE_TYPE,
      isSearch: true
    },
    {
      title: t('common.status'),
      field: 'status',
      dictType: DICT_TYPE.COMMON_STATUS,
      isSearch: true
    },
    {
      title: '公告内容',
      field: 'content',
      form: {
        component: 'Editor',
        colProps: {
          span: 24
        },
        componentProps: {
          valueHtml: ''
        }
      }
    },
    {
      title: t('common.createTime'),
      field: 'createTime',
      formatter: 'formatDate',
      isForm: false
    }
  ]
})
export const { allSchemas } = useVxeCrudSchemas(crudSchemas)
