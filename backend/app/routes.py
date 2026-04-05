from fastapi import APIRouter
from app.models import CareerRequest

router = APIRouter()

@router.post("/career-advice")
def get_career_advice(data: CareerRequest):
    # Dummy logic (replace with AI later)
    return {
        "career": data.career_goal,
        "advice": f"To become a {data.career_goal}, focus on skills, projects, and consistency."
    }

@router.get("/health")
def health_check():
    return {"status": "ok"}
