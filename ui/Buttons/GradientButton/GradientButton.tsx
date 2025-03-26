import styles from "./GradientButton.module.scss"

type Props = {
  onClick?: () => void,
  text?: string
}

const GradientButton = (props: Props) => {
  return (
    <div className={styles.gradient_button_outer} onClick={props.onClick}>
      <div className={styles.gradient_button}>
        {props?.text}
      </div>
    </div>
  )
}

export default GradientButton