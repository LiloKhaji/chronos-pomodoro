import styles from './Heading.module.css';
console.log(styles);
export function Heading() {
  return <h1 className={styles.heading}>Olá Mundo!</h1>;
}
