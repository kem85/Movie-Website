export interface LoginPanelProps{
  loginPanel: React.RefObject<HTMLDivElement | null>
  loginHandler: React.RefObject<HTMLDivElement | null>
  registerPanel : React.RefObject<HTMLDivElement | null>
}
export interface RegisterPanelProps{
  registerPanel : React.RefObject<HTMLDivElement | null>
  loginPanel: React.RefObject<HTMLDivElement | null>
}
export interface NavbarProps{
  registerPanel : React.RefObject<HTMLDivElement | null>
}