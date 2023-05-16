import { ExerciseDetail } from "@/components/ExerciseDetail";
import { useRouter } from "next/router";

export default function Exercise () {
    const router = useRouter();
    const { id } = router.query;
    
    return (
        <ExerciseDetail id={id} />
    )
}