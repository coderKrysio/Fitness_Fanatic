import { ExerciseDetail } from "@/components/ExerciseDetail";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { useRouter } from "next/router";

export default function Exercise () {
    const router = useRouter();
    const { id } = router.query;
    
    return (
        <>
            <Navbar />
            <ExerciseDetail id={id} />
            <Footer />
        </>
    )
}