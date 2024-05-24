﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PetCareWebAPI.DAL;

#nullable disable

namespace PetCareWebAPI.Migrations
{
    [DbContext(typeof(DataBaseContext))]
    [Migration("20240523203544_AddUserType")]
    partial class AddUserType
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.18")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("PetCareWebAPI.DAL.Entities.AdoptionForm", b =>
                {
                    b.Property<int>("IdForm")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdForm"));

                    b.Property<int?>("AdopterIdentification")
                        .HasColumnType("int");

                    b.Property<DateTime?>("CreateDate")
                        .HasColumnType("datetime2");

                    b.Property<int?>("PetIdPet")
                        .HasColumnType("int");

                    b.HasKey("IdForm");

                    b.HasIndex("AdopterIdentification");

                    b.HasIndex("IdForm")
                        .IsUnique();

                    b.HasIndex("PetIdPet");

                    b.ToTable("AdoptionForms");
                });

            modelBuilder.Entity("PetCareWebAPI.DAL.Entities.Appointment", b =>
                {
                    b.Property<int>("IDAppointment")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IDAppointment"));

                    b.Property<int?>("AdopterIdentification")
                        .HasColumnType("int");

                    b.Property<DateTime>("AppointmentDate")
                        .HasColumnType("datetime2");

                    b.Property<int?>("PsichologistIdentification")
                        .HasColumnType("int");

                    b.HasKey("IDAppointment");

                    b.HasIndex("AdopterIdentification");

                    b.HasIndex("IDAppointment")
                        .IsUnique();

                    b.HasIndex("PsichologistIdentification");

                    b.ToTable("Appointments");
                });

            modelBuilder.Entity("PetCareWebAPI.DAL.Entities.MedicalRecord", b =>
                {
                    b.Property<int>("IdMedicalRe")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdMedicalRe"));

                    b.Property<DateTime?>("CreateDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("UpdateDate")
                        .HasColumnType("datetime2");

                    b.Property<int?>("VetIdentification")
                        .HasColumnType("int");

                    b.HasKey("IdMedicalRe");

                    b.HasIndex("IdMedicalRe")
                        .IsUnique();

                    b.HasIndex("VetIdentification");

                    b.ToTable("MedicalRecords");
                });

            modelBuilder.Entity("PetCareWebAPI.DAL.Entities.Person", b =>
                {
                    b.Property<int>("Identification")
                        .HasColumnType("int");

                    b.Property<string>("Address")
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<DateTime>("Borndate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Cellphone")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Lastname")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("userType")
                        .HasColumnType("int");

                    b.HasKey("Identification");

                    b.ToTable("Persons");

                    b.UseTptMappingStrategy();
                });

            modelBuilder.Entity("PetCareWebAPI.DAL.Entities.Pet", b =>
                {
                    b.Property<int>("IdPet")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdPet"));

                    b.Property<int>("Age")
                        .HasColumnType("int");

                    b.Property<string>("Color")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Height")
                        .HasMaxLength(20)
                        .HasColumnType("float");

                    b.Property<int?>("IdMedicalRecord")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("Race")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Status")
                        .HasColumnType("int");

                    b.Property<int>("Tipo")
                        .HasColumnType("int");

                    b.Property<double>("Weight")
                        .HasMaxLength(20)
                        .HasColumnType("float");

                    b.Property<int>("genero")
                        .HasColumnType("int");

                    b.HasKey("IdPet");

                    b.HasIndex("IdPet")
                        .IsUnique();

                    b.ToTable("Pets");
                });

            modelBuilder.Entity("PetCareWebAPI.DAL.Entities.Adopter", b =>
                {
                    b.HasBaseType("PetCareWebAPI.DAL.Entities.Person");

                    b.Property<int>("HouseType")
                        .HasColumnType("int");

                    b.Property<double>("MoneyIncome")
                        .HasColumnType("float");

                    b.Property<string>("Ocupation")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasIndex("Identification")
                        .IsUnique();

                    b.ToTable("Adopter", (string)null);
                });

            modelBuilder.Entity("PetCareWebAPI.DAL.Entities.Psichologist", b =>
                {
                    b.HasBaseType("PetCareWebAPI.DAL.Entities.Person");

                    b.Property<int>("AgeExperiencie")
                        .HasColumnType("int");

                    b.Property<string>("ProfessionalCard")
                        .HasColumnType("nvarchar(max)");

                    b.HasIndex("Identification")
                        .IsUnique();

                    b.ToTable("Psichologist", (string)null);
                });

            modelBuilder.Entity("PetCareWebAPI.DAL.Entities.Vet", b =>
                {
                    b.HasBaseType("PetCareWebAPI.DAL.Entities.Person");

                    b.Property<int>("AgeExperiencie")
                        .HasColumnType("int");

                    b.Property<string>("Specialization")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasIndex("Identification")
                        .IsUnique();

                    b.ToTable("Vet", (string)null);
                });

            modelBuilder.Entity("PetCareWebAPI.DAL.Entities.AdoptionForm", b =>
                {
                    b.HasOne("PetCareWebAPI.DAL.Entities.Adopter", "Adopter")
                        .WithMany()
                        .HasForeignKey("AdopterIdentification");

                    b.HasOne("PetCareWebAPI.DAL.Entities.Pet", "Pet")
                        .WithMany()
                        .HasForeignKey("PetIdPet");

                    b.Navigation("Adopter");

                    b.Navigation("Pet");
                });

            modelBuilder.Entity("PetCareWebAPI.DAL.Entities.Appointment", b =>
                {
                    b.HasOne("PetCareWebAPI.DAL.Entities.Adopter", "Adopter")
                        .WithMany()
                        .HasForeignKey("AdopterIdentification");

                    b.HasOne("PetCareWebAPI.DAL.Entities.Psichologist", "Psichologist")
                        .WithMany()
                        .HasForeignKey("PsichologistIdentification");

                    b.Navigation("Adopter");

                    b.Navigation("Psichologist");
                });

            modelBuilder.Entity("PetCareWebAPI.DAL.Entities.MedicalRecord", b =>
                {
                    b.HasOne("PetCareWebAPI.DAL.Entities.Vet", "Vet")
                        .WithMany()
                        .HasForeignKey("VetIdentification");

                    b.Navigation("Vet");
                });

            modelBuilder.Entity("PetCareWebAPI.DAL.Entities.Adopter", b =>
                {
                    b.HasOne("PetCareWebAPI.DAL.Entities.Person", null)
                        .WithOne()
                        .HasForeignKey("PetCareWebAPI.DAL.Entities.Adopter", "Identification")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("PetCareWebAPI.DAL.Entities.Psichologist", b =>
                {
                    b.HasOne("PetCareWebAPI.DAL.Entities.Person", null)
                        .WithOne()
                        .HasForeignKey("PetCareWebAPI.DAL.Entities.Psichologist", "Identification")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("PetCareWebAPI.DAL.Entities.Vet", b =>
                {
                    b.HasOne("PetCareWebAPI.DAL.Entities.Person", null)
                        .WithOne()
                        .HasForeignKey("PetCareWebAPI.DAL.Entities.Vet", "Identification")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}