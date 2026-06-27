from pathlib import Path
from shutil import copyfile
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "Pavan-Sai-Resume.pdf"
PUBLIC = ROOT / "public" / "Pavan-Sai-Resume.pdf"
DIST = ROOT / "dist" / "Pavan-Sai-Resume.pdf"
DESKTOP_RESUME = ROOT.parent / "resume.pdf"
DESKTOP_UPGRADED = ROOT.parent / "pavan_sai_upgraded_resume.pdf"

BLUE = "#0645AD"
DARK = colors.HexColor("#111111")
RULE = colors.HexColor("#D0D6DE")


def xml(text):
    return escape(text, {"'": "&apos;", '"': "&quot;"})


def display_url(url):
    return url.replace("https://", "").replace("http://", "")


def live(url, label=None):
    text = label or display_url(url)
    return f'<link href="{xml(url)}"><font color="{BLUE}">{xml(text)}</font></link>'


def mailto(email):
    return live(f"mailto:{email}", email)


styles = {
    "name": ParagraphStyle(
        "Name",
        fontName="Helvetica-Bold",
        fontSize=20.8,
        leading=22.8,
        alignment=TA_CENTER,
        textColor=DARK,
        spaceAfter=1,
    ),
    "role": ParagraphStyle(
        "Role",
        fontName="Helvetica",
        fontSize=11.15,
        leading=12.45,
        alignment=TA_CENTER,
        textColor=DARK,
        spaceAfter=1,
    ),
    "contact": ParagraphStyle(
        "Contact",
        fontName="Helvetica",
        fontSize=9.45,
        leading=10.55,
        alignment=TA_CENTER,
        textColor=DARK,
        spaceAfter=0,
    ),
    "section": ParagraphStyle(
        "Section",
        fontName="Helvetica-Bold",
        fontSize=11.6,
        leading=12.9,
        textColor=DARK,
        spaceBefore=7.8,
        spaceAfter=3.4,
        borderWidth=0.35,
        borderColor=RULE,
        borderPadding=(0, 0, 1.5, 0),
    ),
    "body": ParagraphStyle(
        "Body",
        fontName="Helvetica",
        fontSize=9.8,
        leading=11.35,
        textColor=DARK,
        spaceAfter=0.9,
    ),
    "entry": ParagraphStyle(
        "Entry",
        fontName="Helvetica-Bold",
        fontSize=10.2,
        leading=11.8,
        textColor=DARK,
        spaceBefore=1.5,
        spaceAfter=0.6,
    ),
    "bullet": ParagraphStyle(
        "Bullet",
        fontName="Helvetica",
        fontSize=9.65,
        leading=11.15,
        textColor=DARK,
        leftIndent=9,
        firstLineIndent=-6,
        spaceAfter=0.65,
    ),
}


def paragraph(text, style):
    return Paragraph(text, style)


def section(title):
    return paragraph(xml(title), styles["section"])


def body(text):
    return paragraph(text, styles["body"])


def entry(text):
    return paragraph(f"<b>{xml(text)}</b>", styles["entry"])


def bullet(text):
    return paragraph(f"- {text}", styles["bullet"])


def project(title, stack, url, bullets, github=None):
    links = f"Live: {live(url)}"
    if github:
        links += f" | {live(github, 'Repo')}"
    return [
        entry(title),
        body(f"{xml(stack)} | {links}"),
        *[bullet(item) for item in bullets],
    ]


def build_story():
    story = [
        paragraph("GANGAPUJARI JANAKI VENKATA PAVAN SAI", styles["name"]),
        paragraph(
            "Full Stack, DevOps and AI Engineer | Data Science | MERN Stack | FastAPI | Cloud | Cybersecurity",
            styles["role"],
        ),
        paragraph(
            f"Hyderabad, India | +91 9502589529 | {mailto('pavansai20052004@gmail.com')} | 6+ months internship experience",
            styles["contact"],
        ),
        paragraph(
            f"LinkedIn: {live('https://www.linkedin.com/in/gjv44')} | GitHub: {live('https://github.com/pavansai20052004-hue')} | Portfolio: {live('https://pavan-sai-portfolio-xi.vercel.app')}",
            styles["contact"],
        ),
        Spacer(1, 2),
        section("TECHNICAL SKILLS"),
        body(
            "<b>Languages:</b> JavaScript, TypeScript, Java, Python, SQL, Bash, C# | "
            "<b>Frontend:</b> React.js, Next.js, HTML5, CSS3, Tailwind CSS | "
            "<b>Backend:</b> Node.js, Express.js, FastAPI, Flask, Spring Boot, REST APIs, MVC"
        ),
        body(
            "<b>Cloud/DevOps:</b> Docker, Kubernetes, Vercel, Render, Netlify, Git, Linux, CI/CD, Nginx, Ansible, Apache Maven | "
            "<b>Data/AI:</b> MongoDB, PostgreSQL, MySQL, SQLite, Pandas, NumPy, Scikit-learn, OpenAI API, Gemini API | "
            "<b>Security:</b> JWT, RBAC, API validation, threat modeling, audit logging"
        ),
        section("INTERNSHIP EXPERIENCE"),
        entry("Data Science and Analytics Intern | Zidio Development | Hyderabad | May 2026 - Present"),
        bullet(
            "Built analytics workflows for cleaning, EDA, dashboards and model evaluation using Python, Pandas, NumPy, cross-validation and ROC-AUC scoring."
        ),
        entry("Full Stack Web Development Intern | Unified Mentor | Hyderabad | Jan 2026 - Apr 2026"),
        bullet(
            "Developed 15+ MERN REST APIs with MongoDB, JWT authentication, RBAC authorization, input validation, MVC structure and reusable middleware."
        ),
        entry("DevOps Intern | Skilified Mentor | Hyderabad | Mar 2026 - Apr 2026"),
        bullet(
            "Automated Java compile-test-package workflows with Apache Maven, Linux environments, Git practices and CI/CD-ready build execution."
        ),
        section("PROJECTS"),
        *project(
            "DevPilot AI - Autonomous DevOps Incident Recovery Platform",
            "Next.js, TypeScript, FastAPI, Python, OpenAI API, Docker, Vercel, Render",
            "https://devpilot-ai-two.vercel.app",
            [
                "Built an AI DevOps control plane that turns logs, CI/CD failures, Kubernetes signals and Terraform drift into reviewed remediation actions.",
                "Delivered incident dashboards, predictive failure analysis, approval workflows and audit-ready recovery screens; shortlisted Top 1000 in OpenAI x Outskill Hackathon.",
            ],
            "https://github.com/pavansai20052004-hue/DEVPILOT-AI",
        ),
        *project(
            "RentEase - Rental Management Platform",
            "React, Node.js, Express.js, MongoDB, JWT, RBAC",
            "https://rentease-frontend-sooty.vercel.app",
            [
                "Built role-based rental dashboards, secure authentication, CRUD workflows, validation-focused APIs and clean frontend-backend separation."
            ],
            "https://github.com/pavansai20052004-hue/rentease-project",
        ),
        *project(
            "AegisCloud - Self-Healing AI Cloud Infrastructure",
            "Java 21, Spring Boot, FastAPI, Kubernetes, Prometheus",
            "https://self-healing-ai-cloud-infrastructur.vercel.app",
            [
                "Built self-healing cloud workflows with anomaly detection, remediation ranking, approval gates, rollback triggers and incident intelligence."
            ],
            "https://github.com/pavansai20052004-hue/Self-Healing-AI-Cloud-Infrastructure-Platform",
        ),
        *project(
            "CrediSense AI - Credit Risk Decision Platform",
            "Python, Flask, Scikit-learn, Pandas, NumPy, SQLite",
            "https://credit-risk-project.vercel.app",
            [
                "Created loan screening dashboards with approval/default risk scoring, preprocessing, feature engineering, cross-validation and tuning."
            ],
            "https://github.com/pavansai20052004-hue/credit-risk-ensemble-ml",
        ),
        *project(
            "HunarHub - Skill Marketplace Platform",
            "React, Node.js, Express.js, MongoDB, CORS",
            "https://hunar-hub-eight.vercel.app",
            [
                "Delivered a marketplace with 10+ REST APIs, role-aware access, MongoDB CRUD, CORS configuration and centralized error handling."
            ],
            "https://github.com/pavansai20052004-hue/HunarHub",
        ),
        section("EDUCATION"),
        body(
            "B.Tech in Data Science - Holy Mary Institute of Technology & Science | 2022 - 2026 | CGPA: 8.0/10 | Intermediate MPC - Glimpses Junior College | 75% | SSC CBSE - DAV Public School | 75%"
        ),
        section("CERTIFICATIONS"),
        body(
            "DevOps Engineer - Skilified Mentor | Full Stack Web Development - Unified Mentor | Data Science and Analytics - Zidio Development | Generative AI - Infosys Springboard | Processing and Problem Solving - IBM SkillsBuild"
        ),
        section("ACHIEVEMENTS"),
        bullet("OpenAI x Outskill Hackathon: DevPilot AI shortlisted Top 1000 worldwide."),
        bullet("Research publication: Ayurvedic herb traceability using blockchain technology, January 2026."),
        bullet("State-level cricketer; state-level 1st place and national-level runner in 100m athletics. Languages: English, Hindi, Telugu."),
    ]
    return story


def build_pdf(path):
    path.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(path),
        pagesize=letter,
        rightMargin=28,
        leftMargin=28,
        topMargin=22,
        bottomMargin=20,
        title="Pavan Sai ATS Resume",
        author="Gangapujari Janaki Venkata Pavan Sai",
        subject="ATS-friendly one-page resume",
    )
    doc.build(build_story())


def main():
    build_pdf(OUTPUT)
    for destination in (PUBLIC, DIST, DESKTOP_RESUME, DESKTOP_UPGRADED):
        destination.parent.mkdir(parents=True, exist_ok=True)
        copyfile(OUTPUT, destination)
        print(f"Wrote {destination}")
    print(f"Wrote {OUTPUT}")


if __name__ == "__main__":
    main()
