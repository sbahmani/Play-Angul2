name := """Play-Angul2"""

version := "1.0-SNAPSHOT"

resolvers += "Maven Central" at "http://repo1.maven.org/maven2/"

resolvers += "mvnrepository" at "http://mvnrepository.com/artifact/"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

scalaVersion := "2.11.8"

libraryDependencies ++= Seq(
)
