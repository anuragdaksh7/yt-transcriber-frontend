import styles from "./SimpleInput.module.scss"

type Props = {
  type: "text" | "number",
  placeholder?: string
}

const SimpleInput = (props: Props) => {
  return (
    <input type={props.type} placeholder={props?.placeholder} className={styles.simple_input} />
  )
}

export default SimpleInput