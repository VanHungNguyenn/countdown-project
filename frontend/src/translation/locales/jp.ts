import { headerTranslationJP } from '@/components/header/translation/locales';
import { APP_NAME } from '@/constants';
import { loginPageTranslationJP } from '@/pages/login/translation/locales';

const commonTranslationJP = {
  APP: {
    APP_NAME: APP_NAME,
    ERROR: 'エラー',
    INFO: '情報',
    WARNING: '警告',
    CONFIRM: '確認',
    LOADING: '読み込み中...',
    CHANGE: '変更',
    SUCCESS: '成功',
    SELECT: '選択',
    CANCEL: 'キャンセル',
    OK: 'OK',
  },
  VALID: {
    REQUIRED: 'この項目は必須です。',
  },
  AUTH: {
    FORBIDDEN_ERROR: 'この操作を行う権限がありません。', //403
  },
  SYS: {
    NETWORK_ERROR: 'サーバと通信できませんでした。',
    NOT_FOUND_ERROR: '対象のデータが見つかりませんでした。', //404
    INTERNAL_SERVER_ERROR: 'サーバでエラーが発生しました。', //500
    UNKNOWN_ERROR: '不明なエラーが発生しました。',
  },
  ERROR: {
    NO_SELECT: 'データが選択されていません。',
    UNEXPECTED: 'エラーが発生しました',
  },
};

export const translationJP = {
  ...commonTranslationJP,
  ...headerTranslationJP,
  ...loginPageTranslationJP,
};
