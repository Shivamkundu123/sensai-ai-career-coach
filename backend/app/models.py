from pydantic import BaseModel

class CareerRequest(BaseModel):
    career_goal: str
