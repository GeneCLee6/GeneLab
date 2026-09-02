import 'styled-components'
import type { AppTheme } from './theme'

// Module augmentation so `props.theme` is typed everywhere styled-components is used.
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends AppTheme {}
}
