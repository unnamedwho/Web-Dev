from django.urls import path
import api.views as views

urlpatterns = [
    path("companies/", views.company_list),
    path("companies/<int:id>/", views.company_details),
    path("companies/<int:id>/vacancies/", views.company_vacancies),
    path("vacancies/", views.VacancyListAPIView.as_view()),
    path("vacancies/<int:id>", views.VacancyDetailAPIView.as_view()),
    path("vacancies/top_ten", views.VacancyTopTenAPIView.as_view()),
]

# urlpatterns = [
#     path("companies/", views.company_list),
#     path("companies/<int:id>/", views.company_details),
#     path("companies/<int:id>/vacancies/", views.company_vacancies),
#     path("vacancies/", views.vacancies_list),
#     path("vacancies/<int:id>", views.vacancy_detail),
#     path("vacancies/top_ten", views.vacancies_top_ten),
# ]
