import models
from database import SessionLocal
from auth import get_password_hash

def reset_admin():
    db = SessionLocal()
    admin = db.query(models.User).filter(models.User.username == "admin").first()
    
    hashed_password = get_password_hash("admin123")
    
    if admin:
        print("Resetting admin password...")
        admin.hashed_password = hashed_password
    else:
        print("Creating admin user...")
        admin = models.User(username="admin", hashed_password=hashed_password)
        db.add(admin)
    
    db.commit()
    db.close()
    print("Admin credentials set to: admin / admin123")

if __name__ == "__main__":
    reset_admin()
