import styles from "@/styles/Home.module.css";
import BarChart from "@/components/BarChart";
import { Bar } from "react-chartjs-2"
import HorizontalBar from "@/components/HorizontalBarChart";
import PieChart from "@/components/PieChart";
import { Pie } from "@/components/PieChart"



export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <BarChart />
        <HorizontalBar />
        <PieChart/>
      </main>
    </>
  );
}
