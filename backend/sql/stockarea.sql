--
-- PostgreSQL database dump
--

-- Dumped from database version 12.5 (Ubuntu 12.5-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.5 (Ubuntu 12.5-0ubuntu0.20.04.1)

-- Started on 2021-02-28 15:43:53 IST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 209 (class 1259 OID 24800)
-- Name: cities; Type: TABLE; Schema: public; Owner: wasim
--

CREATE TABLE public.cities (
    id integer NOT NULL,
    name character varying(25)
);


ALTER TABLE public.cities OWNER TO wasim;

--
-- TOC entry 208 (class 1259 OID 24798)
-- Name: cities_id_seq; Type: SEQUENCE; Schema: public; Owner: wasim
--

CREATE SEQUENCE public.cities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cities_id_seq OWNER TO wasim;

--
-- TOC entry 3005 (class 0 OID 0)
-- Dependencies: 208
-- Name: cities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: wasim
--

ALTER SEQUENCE public.cities_id_seq OWNED BY public.cities.id;


--
-- TOC entry 207 (class 1259 OID 24780)
-- Name: clusters; Type: TABLE; Schema: public; Owner: wasim
--

CREATE TABLE public.clusters (
    id integer NOT NULL,
    name character varying(50)
);


ALTER TABLE public.clusters OWNER TO wasim;

--
-- TOC entry 206 (class 1259 OID 24778)
-- Name: clusters_id_seq; Type: SEQUENCE; Schema: public; Owner: wasim
--

CREATE SEQUENCE public.clusters_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.clusters_id_seq OWNER TO wasim;

--
-- TOC entry 3006 (class 0 OID 0)
-- Dependencies: 206
-- Name: clusters_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: wasim
--

ALTER SEQUENCE public.clusters_id_seq OWNED BY public.clusters.id;


--
-- TOC entry 205 (class 1259 OID 24772)
-- Name: types; Type: TABLE; Schema: public; Owner: wasim
--

CREATE TABLE public.types (
    id integer NOT NULL,
    name character varying(100)
);


ALTER TABLE public.types OWNER TO wasim;

--
-- TOC entry 204 (class 1259 OID 24770)
-- Name: types_id_seq; Type: SEQUENCE; Schema: public; Owner: wasim
--

CREATE SEQUENCE public.types_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.types_id_seq OWNER TO wasim;

--
-- TOC entry 3007 (class 0 OID 0)
-- Dependencies: 204
-- Name: types_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: wasim
--

ALTER SEQUENCE public.types_id_seq OWNED BY public.types.id;


--
-- TOC entry 203 (class 1259 OID 24764)
-- Name: warehouses; Type: TABLE; Schema: public; Owner: wasim
--

CREATE TABLE public.warehouses (
    id integer NOT NULL,
    name character varying(150),
    code character varying(25),
    space_available integer,
    type_id integer,
    cluster_id integer,
    is_registered boolean,
    is_live boolean,
    city_id integer
);


ALTER TABLE public.warehouses OWNER TO wasim;

--
-- TOC entry 202 (class 1259 OID 24762)
-- Name: warehouses_id_seq; Type: SEQUENCE; Schema: public; Owner: wasim
--

CREATE SEQUENCE public.warehouses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.warehouses_id_seq OWNER TO wasim;

--
-- TOC entry 3008 (class 0 OID 0)
-- Dependencies: 202
-- Name: warehouses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: wasim
--

ALTER SEQUENCE public.warehouses_id_seq OWNED BY public.warehouses.id;


--
-- TOC entry 2851 (class 2604 OID 24803)
-- Name: cities id; Type: DEFAULT; Schema: public; Owner: wasim
--

ALTER TABLE ONLY public.cities ALTER COLUMN id SET DEFAULT nextval('public.cities_id_seq'::regclass);


--
-- TOC entry 2850 (class 2604 OID 24783)
-- Name: clusters id; Type: DEFAULT; Schema: public; Owner: wasim
--

ALTER TABLE ONLY public.clusters ALTER COLUMN id SET DEFAULT nextval('public.clusters_id_seq'::regclass);


--
-- TOC entry 2849 (class 2604 OID 24775)
-- Name: types id; Type: DEFAULT; Schema: public; Owner: wasim
--

ALTER TABLE ONLY public.types ALTER COLUMN id SET DEFAULT nextval('public.types_id_seq'::regclass);


--
-- TOC entry 2848 (class 2604 OID 24767)
-- Name: warehouses id; Type: DEFAULT; Schema: public; Owner: wasim
--

ALTER TABLE ONLY public.warehouses ALTER COLUMN id SET DEFAULT nextval('public.warehouses_id_seq'::regclass);


--
-- TOC entry 2999 (class 0 OID 24800)
-- Dependencies: 209
-- Data for Name: cities; Type: TABLE DATA; Schema: public; Owner: wasim
--

COPY public.cities (id, name) FROM stdin;
1	Delhi
2	Chennai
3	Indore
4	Mumbai
5	Kolkata
6	Goa
\.


--
-- TOC entry 2997 (class 0 OID 24780)
-- Dependencies: 207
-- Data for Name: clusters; Type: TABLE DATA; Schema: public; Owner: wasim
--

COPY public.clusters (id, name) FROM stdin;
1	cluster-a-1
2	cluster-a-21
3	cluster-v-1
4	cluster-v-2
5	cluster-a-2
6	cluster-a-3
7	cluster-a-5
8	cluster-a-15
15	cluster-v-15
\.


--
-- TOC entry 2995 (class 0 OID 24772)
-- Dependencies: 205
-- Data for Name: types; Type: TABLE DATA; Schema: public; Owner: wasim
--

COPY public.types (id, name) FROM stdin;
1	Leasable Space
2	Warehouse Service
3	New Type
\.


--
-- TOC entry 2993 (class 0 OID 24764)
-- Dependencies: 203
-- Data for Name: warehouses; Type: TABLE DATA; Schema: public; Owner: wasim
--

COPY public.warehouses (id, name, code, space_available, type_id, cluster_id, is_registered, is_live, city_id) FROM stdin;
6	Warehouse-00081	w-00081	70	1	2	t	t	1
14	Warehouse-557	w-557	541	1	2	t	t	3
15	Warehouse-047	w-047	45	2	1	t	f	1
\.


--
-- TOC entry 3009 (class 0 OID 0)
-- Dependencies: 208
-- Name: cities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: wasim
--

SELECT pg_catalog.setval('public.cities_id_seq', 6, true);


--
-- TOC entry 3010 (class 0 OID 0)
-- Dependencies: 206
-- Name: clusters_id_seq; Type: SEQUENCE SET; Schema: public; Owner: wasim
--

SELECT pg_catalog.setval('public.clusters_id_seq', 15, true);


--
-- TOC entry 3011 (class 0 OID 0)
-- Dependencies: 204
-- Name: types_id_seq; Type: SEQUENCE SET; Schema: public; Owner: wasim
--

SELECT pg_catalog.setval('public.types_id_seq', 13, true);


--
-- TOC entry 3012 (class 0 OID 0)
-- Dependencies: 202
-- Name: warehouses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: wasim
--

SELECT pg_catalog.setval('public.warehouses_id_seq', 15, true);


--
-- TOC entry 2862 (class 2606 OID 24805)
-- Name: cities cities_pkey; Type: CONSTRAINT; Schema: public; Owner: wasim
--

ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_pkey PRIMARY KEY (id);


--
-- TOC entry 2860 (class 2606 OID 24785)
-- Name: clusters clusters_pkey; Type: CONSTRAINT; Schema: public; Owner: wasim
--

ALTER TABLE ONLY public.clusters
    ADD CONSTRAINT clusters_pkey PRIMARY KEY (id);


--
-- TOC entry 2858 (class 2606 OID 24777)
-- Name: types types_pkey; Type: CONSTRAINT; Schema: public; Owner: wasim
--

ALTER TABLE ONLY public.types
    ADD CONSTRAINT types_pkey PRIMARY KEY (id);


--
-- TOC entry 2856 (class 2606 OID 24769)
-- Name: warehouses warehouses_pkey; Type: CONSTRAINT; Schema: public; Owner: wasim
--

ALTER TABLE ONLY public.warehouses
    ADD CONSTRAINT warehouses_pkey PRIMARY KEY (id);


--
-- TOC entry 2852 (class 1259 OID 24811)
-- Name: fki_city; Type: INDEX; Schema: public; Owner: wasim
--

CREATE INDEX fki_city ON public.warehouses USING btree (city_id);


--
-- TOC entry 2853 (class 1259 OID 24797)
-- Name: fki_cluster; Type: INDEX; Schema: public; Owner: wasim
--

CREATE INDEX fki_cluster ON public.warehouses USING btree (cluster_id);


--
-- TOC entry 2854 (class 1259 OID 24791)
-- Name: fki_type; Type: INDEX; Schema: public; Owner: wasim
--

CREATE INDEX fki_type ON public.warehouses USING btree (type_id);


--
-- TOC entry 2865 (class 2606 OID 24806)
-- Name: warehouses city; Type: FK CONSTRAINT; Schema: public; Owner: wasim
--

ALTER TABLE ONLY public.warehouses
    ADD CONSTRAINT city FOREIGN KEY (city_id) REFERENCES public.cities(id) NOT VALID;


--
-- TOC entry 2864 (class 2606 OID 24792)
-- Name: warehouses cluster; Type: FK CONSTRAINT; Schema: public; Owner: wasim
--

ALTER TABLE ONLY public.warehouses
    ADD CONSTRAINT cluster FOREIGN KEY (cluster_id) REFERENCES public.clusters(id) NOT VALID;


--
-- TOC entry 2863 (class 2606 OID 24786)
-- Name: warehouses type; Type: FK CONSTRAINT; Schema: public; Owner: wasim
--

ALTER TABLE ONLY public.warehouses
    ADD CONSTRAINT type FOREIGN KEY (type_id) REFERENCES public.types(id) NOT VALID;


-- Completed on 2021-02-28 15:43:53 IST

--
-- PostgreSQL database dump complete
--

