## Pharmashift - Employee Shift Management App 💊

**Pharmashift** is a web application built with Next.js, TypeScript, Supabase, and Tailwind CSS to streamline employee shift management. It empowers both employees and managers to efficiently manage and track shifts, ensuring smooth operations within your organization.

---
<br>
<br>
<img src="./public/undraw_medicine_b-1-ol.svg">


### Features

* **Employee Shift Management:**
    * Employees can submit shift change requests through a user-friendly form 📝.
    * Managers can view all employee information and their current shifts in a centralized location 📅.
* **Seamless User Experience:**
    * Built with Next.js for a performant and dynamic user experience 🚀.
    * Tailwind CSS provides a clean and responsive design that adapts to any device 📱.
* **Robust Backend:**
    * Leverages Supabase for a secure and scalable backend infrastructure 💪.
    * TypeScript ensures code maintainability and type safety 🧪.

### Getting Started

**Prerequisites:**

* Node.js and npm (or yarn) installed on your system.
* A Supabase account with a project created.

**Installation:**

1. Clone this repository:

   ```bash
   git clone https://github.com/alirezakhnn/Pharmashift.git
   ```

2. Navigate to the project directory:

   ```bash
   cd pharmashift
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

**Configuration:**

1. Create a `.env.local` file in the project root directory.
2. Add your Supabase project details to the `.env.local` file:

   ```
   NEXTAUTH_URL=http://localhost:3000  [Replace with your deployment URL if applicable]
   NEXTAUTH_PROVIDER=SUPABASE  [Configure Supabase provider]
   NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
   ```

**Development:**

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Access the application at http://localhost:3000 in your browser.

**Deployment:**

Refer to the Next.js documentation for deployment instructions specific to your hosting provider.

### Contributing

We welcome contributions to Pharmashift! Please create a pull request to share your improvements 🎉.


---


<p style="text-align:center; font-weight:bold; text-size:30px;">Made with ❤️ by alirezakhnn</p>
