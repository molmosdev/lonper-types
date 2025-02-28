export interface IOption {
  name: string;
  value: any;
  disabled?: boolean;
  icon?: string;
  action?: () => void;
}
