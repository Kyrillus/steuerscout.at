create table "public"."kanzlein" (
    "ID" bigint not null,
    "Firmenname" text,
    "Website URL" text,
    "Stadt" text,
    "PLZ" text,
    "Streetname" text,
    "Google Rating" real,
    "Google Rating Anzahl" bigint,
    "Email" text,
    "Telefonnummer" text,
    "zusätzliche Sprachen" text,
    "Kurz Info" text,
    "Branche" text,
    "Logo URL" text,
    "Unternehmensberatung" boolean,
    "Strategische Steuerberatung" boolean,
    "Gründungsberatung" boolean,
    "Vermögensberatung" boolean,
    "Internationales Steuerrecht" boolean,
    "Buchhaltung & Lohnverrechnung" boolean,
    "Sanierung & Insolvenz" boolean,
    "Erbschaftssteuerberatung" boolean,
    "Wirtschaftsprüfung" boolean
);


CREATE UNIQUE INDEX steuerkanzlein_pkey ON public.kanzlein USING btree ("ID");

alter table "public"."kanzlein" add constraint "steuerkanzlein_pkey" PRIMARY KEY using index "steuerkanzlein_pkey";

grant delete on table "public"."kanzlein" to "anon";

grant insert on table "public"."kanzlein" to "anon";

grant references on table "public"."kanzlein" to "anon";

grant select on table "public"."kanzlein" to "anon";

grant trigger on table "public"."kanzlein" to "anon";

grant truncate on table "public"."kanzlein" to "anon";

grant update on table "public"."kanzlein" to "anon";

grant delete on table "public"."kanzlein" to "authenticated";

grant insert on table "public"."kanzlein" to "authenticated";

grant references on table "public"."kanzlein" to "authenticated";

grant select on table "public"."kanzlein" to "authenticated";

grant trigger on table "public"."kanzlein" to "authenticated";

grant truncate on table "public"."kanzlein" to "authenticated";

grant update on table "public"."kanzlein" to "authenticated";

grant delete on table "public"."kanzlein" to "service_role";

grant insert on table "public"."kanzlein" to "service_role";

grant references on table "public"."kanzlein" to "service_role";

grant select on table "public"."kanzlein" to "service_role";

grant trigger on table "public"."kanzlein" to "service_role";

grant truncate on table "public"."kanzlein" to "service_role";

grant update on table "public"."kanzlein" to "service_role";


