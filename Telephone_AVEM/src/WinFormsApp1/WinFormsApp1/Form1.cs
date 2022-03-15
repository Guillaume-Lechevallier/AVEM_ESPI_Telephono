using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

//librarie MySQL
using MySql.Data.MySqlClient;

namespace WinFormsApp1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            Icon icon = Icon.ExtractAssociatedIcon("logo.ico"); this.Icon = icon;

        }



        private void button1_Click(object sender, EventArgs e)
        {
            String connexion = "database=AVEM_telephonie; server=localhost; userid=" + textBox1.Text + "; password=" + textBox2.Text;
            using var connection = new MySqlConnection(connexion);

            try
            {
                connection.Open();
                MessageBox.Show("connecté"); ;
                
            }
            catch
            {
                MessageBox.Show("Une errueur est survenue lors de votre tentative de connexion à la base de donnée\nSi vous avez une connexion internet local");
                /*faire un try catch sur la connexion internet local*/
            }

        }

        private void pictureBox2_Click(object sender, EventArgs e)
        {
            MessageBox.Show("La connexion à la base de donnée nécessite une \nauthentification approuvé par l'administrateur.\nContactez le support pour plus d'information", "information", MessageBoxButtons.OK, MessageBoxIcon.Question);
        }

        private void label4_Click(object sender, EventArgs e)
        {
            Process browser = new Process();
            browser.EnableRaisingEvents = true;
            browser.StartInfo.Arguments = "localhost";
            browser.StartInfo.FileName = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
            browser.Start();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            Close();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            this.WindowState = FormWindowState.Minimized;
        }


        private void label5_Click(object sender, EventArgs e)
        {

        }
    }
}